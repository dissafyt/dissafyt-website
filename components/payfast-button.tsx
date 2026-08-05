import { Button } from "@/components/ui/button"

const PAYFAST_ACTION = "https://payment.payfast.io/eng/process"
const RECEIVER = "17675995"
const SITE_URL = "https://dissafyt.com"

type PayfastConfig = {
  amount: string
  itemName: string
  itemDescription: string
}

/**
 * Live PayFast subscription config per plan, generated from the PayFast
 * button generator. All plans bill monthly (frequency 3) for 12 cycles.
 */
const PAYFAST_PLANS: Record<string, PayfastConfig> = {
  solo: {
    amount: "100",
    itemName: "The Solo",
    itemDescription:
      "One fresh cut every month to keep you looking sharp.\n\n- 1 haircut per month\n- Book anytime in the month\n- Priority booking slots\n- Cancel anytime",
  },
  twice: {
    amount: "180",
    itemName: "The Regular",
    itemDescription:
      "Two cuts a month for the guy who never lets it grow out.\n\n- 2 haircuts per month\n- Best value per cut\n- Priority booking slots\n- Skip the queue\n- Cancel anytime",
  },
  "father-son": {
    amount: "180",
    itemName: "Father n Son",
    itemDescription:
      "A combo cut for you and your boy — bonding time, sorted.\n\n- 1 combo cut per month\n- Father + son together\n- Great for the little ones\n- Priority booking slots\n- Cancel anytime",
  },
}

export function PayfastButton({
  planId,
  featured,
}: {
  planId: string
  featured?: boolean
}) {
  const config = PAYFAST_PLANS[planId]

  if (!config) return null

  return (
    <form action={PAYFAST_ACTION} method="post">
      <input type="hidden" name="cmd" value="_paynow" />
      <input type="hidden" name="receiver" value={RECEIVER} />
      <input type="hidden" name="return_url" value={SITE_URL} />
      <input type="hidden" name="cancel_url" value={SITE_URL} />
      <input type="hidden" name="notify_url" value={SITE_URL} />
      <input type="hidden" name="amount" value={config.amount} />
      <input type="hidden" name="item_name" value={config.itemName} />
      <input type="hidden" name="item_description" value={config.itemDescription} />
      <input type="hidden" name="subscription_type" value="1" />
      <input type="hidden" name="recurring_amount" value={config.amount} />
      <input type="hidden" name="cycles" value="12" />
      <input type="hidden" name="frequency" value="3" />
      <Button
        type="submit"
        aria-label={`Subscribe to the ${config.itemName} plan via PayFast`}
        className={
          featured
            ? "w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            : "w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-primary/40 font-semibold"
        }
      >
        Subscribe with PayFast
      </Button>
    </form>
  )
}

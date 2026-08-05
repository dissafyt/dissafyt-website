import { Button } from "@/components/ui/button"

/**
 * PayFast subscribe button (styled placeholder).
 *
 * ─────────────────────────────────────────────────────────────
 * HOW TO WIRE UP PAYFAST
 * ─────────────────────────────────────────────────────────────
 * 1. Go to the PayFast button generator:
 *    https://www.payfast.co.za/user/html-code (Onsite / Button generator)
 * 2. Create a button for each plan with the correct recurring amount:
 *      - "solo"        -> R100 / month (subscription)
 *      - "twice"       -> R180 / month (subscription)
 *      - "father-son"  -> R180 / month (subscription)
 * 3. PayFast gives you an HTML <form> ... </form> snippet per plan.
 *    Replace the <Button> below (matched on `planId`) with that form,
 *    or paste the form's action + hidden inputs and keep the styled
 *    button as the submit element, e.g.:
 *
 *    <form action="https://www.payfast.co.za/eng/process" method="post">
 *      <input type="hidden" name="cmd" value="_paynow" />
 *      <input type="hidden" name="receiver" value="YOUR_MERCHANT_ID" />
 *      ...other generated hidden fields...
 *      <Button type="submit" className="...">Subscribe</Button>
 *    </form>
 * ─────────────────────────────────────────────────────────────
 */

export function PayfastButton({
  planId,
  featured,
}: {
  planId: string
  featured?: boolean
}) {
  return (
    <Button
      type="button"
      data-plan={planId}
      aria-label={`Subscribe to the ${planId} plan via PayFast`}
      className={
        featured
          ? "w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          : "w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-primary/40 font-semibold"
      }
    >
      Subscribe with PayFast
    </Button>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-1">
      <Checkbox id="terms" />
      <Input />
    </div>
  )
}

const Overview = () => {
  return (
    <>
      <CheckboxDemo />
      <CheckboxDemo />
      <CheckboxDemo />
      <Button>Submit</Button>
    </>
  )
}

export default Overview

import { Card } from "@/components/ui/card";

export default function Statistics() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Statistics</h1>
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-2">Monthly Donations</h2>
        <p className="text-lg">50 kg</p>
      </Card>
      <Card className="p-4 mt-4">
        <h2 className="text-xl font-semibold mb-2">Weekly Donations</h2>
        <p className="text-lg">12 kg</p>
      </Card>
    </div>
  );
}

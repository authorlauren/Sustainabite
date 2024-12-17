import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/statistics">
          <Card className="p-4 cursor-pointer hover:bg-gray-100">
            <h2 className="text-xl font-semibold mb-2">Total Donations</h2>
            <p className="text-lg">150 kg</p>
          </Card>
        </Link>
        <Link href="/statistics">
          <Card className="p-4 cursor-pointer hover:bg-gray-100">
            <h2 className="text-xl font-semibold mb-2">Total Food Items</h2>
            <p className="text-lg">50 items</p>
          </Card>
        </Link>
        <Link href="/statistics">
          <Card className="p-4 cursor-pointer hover:bg-gray-100">
            <h2 className="text-xl font-semibold mb-2">Active Donors</h2>
            <p className="text-lg">20 donors</p>
          </Card>
        </Link>
        <Link href="/grocery-list">
          <Card className="p-4 cursor-pointer hover:bg-gray-100">
            <h2 className="text-xl font-semibold mb-2">Grocery List</h2>
            <p className="text-lg">Manage your grocery items</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pro Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your professional dashboard is ready. More features coming soon!</p>
        </CardContent>
      </Card>
    </div>
  );
}

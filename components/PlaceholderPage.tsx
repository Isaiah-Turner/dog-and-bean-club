import { Card, CardContent } from './ui/card';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          <h1 className="mb-4">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

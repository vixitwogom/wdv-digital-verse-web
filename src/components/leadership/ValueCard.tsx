
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ValueCardProps {
  letter: string;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
}

const ValueCard = ({ letter, title, description, bgColor, textColor = "text-white" }: ValueCardProps) => {
  return (
    <Card className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
          <span className={`${textColor} text-2xl font-bold`}>{letter}</span>
        </div>
        <CardTitle className="text-xl text-wdv-navy">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ValueCard;

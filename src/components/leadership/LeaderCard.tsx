
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface LeaderCardProps {
  leader: Leader;
  index: number;
}

const LeaderCard = ({ leader, index }: LeaderCardProps) => {
  return (
    <Card 
      className="hover:shadow-xl transition-shadow animate-slide-up border-0 shadow-lg" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="text-center pb-6">
        <div className="w-32 h-32 bg-gradient-to-br from-wdv-navy to-wdv-blue rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
          {leader.name.split(' ').map(n => n[0]).join('')}
        </div>
        <CardTitle className="text-2xl text-wdv-navy mb-2">{leader.name}</CardTitle>
        <div className="inline-flex items-center bg-wdv-gold text-wdv-navy px-4 py-2 rounded-full text-sm font-semibold">
          {leader.role}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 leading-relaxed mb-6">
          {leader.bio}
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button className="flex items-center space-x-2 text-wdv-blue hover:text-wdv-navy transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="text-sm">LinkedIn</span>
          </button>
          <button className="flex items-center space-x-2 text-wdv-blue hover:text-wdv-navy transition-colors">
            <Mail className="h-5 w-5" />
            <span className="text-sm">Contact</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderCard;

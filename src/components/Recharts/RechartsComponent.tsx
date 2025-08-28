import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import {
  BlurCircle,
  CenteredText,
  ChartContainer,
  COLORS,
} from './RechartsComponents.styles';

interface VoteChartProps {
  voteAverage?: number;
}

export default function RechartsComponents({ voteAverage }: VoteChartProps) {
  const votePercentage = voteAverage ? Math.round(voteAverage * 10) : 0;

  const data = [
    { name: 'Completed', value: votePercentage },
    { name: 'Remaining', value: 100 - votePercentage },
  ];

  return (
    <ChartContainer>
      <ResponsiveContainer width={80} height={80}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={25}
            outerRadius={35}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <BlurCircle />
      <CenteredText>
        <span className="number">{votePercentage}</span>
        <span className="percent">%</span>
      </CenteredText>
    </ChartContainer>
  );
}

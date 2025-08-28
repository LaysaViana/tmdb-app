import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import {
  BlurCircle,
  CenteredText,
  ChartContainer,
} from './RechartsComponents.styles';
import { useTheme, type DefaultTheme } from 'styled-components';

interface VoteChartProps {
  voteAverage?: number;
}

export default function RechartsComponents({ voteAverage }: VoteChartProps) {
  const votePercentage = voteAverage ? Math.round(voteAverage * 10) : 0;

  const theme = useTheme() as DefaultTheme;

  const data = [
    { name: 'Completed', value: votePercentage },
    { name: 'Remaining', value: 100 - votePercentage },
  ];

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={25}
            outerRadius={35}
            startAngle={90}
            endAngle={450}
            dataKey="value"
            stroke="none"
          >
            <Cell key={0} fill={theme.colors.chart} />
            <Cell key={1} fill={theme.colors.border} />
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

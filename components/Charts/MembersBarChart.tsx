import { Doughnut, Polar } from "react-chartjs-2";

const MembersBarChart = ({ answers: tempAnswers }: { answers: Array<any> }) => {
  const answers = tempAnswers.filter((q) => q.voteCount !== 0);

  const data = {
    labels: answers.map((q) => q.answer),
    datasets: [
      {
        label: "Number of Votes",
        data: answers.map((q) => q.voteCount),
        backgroundColor: [
          "#a29bfe",
          "#636e72",
          "#00b894",
          "#d63031",
          "#e17055",
          "#74b9ff",
          "#fbc531",
          "#0984e3",
        ],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default MembersBarChart;

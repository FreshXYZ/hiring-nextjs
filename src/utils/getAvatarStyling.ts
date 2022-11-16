///randomly generate number between 1 and 10
export const getAvatarStyling = () => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  switch (randomNum) {
    case 1:
      return 'bg-chart-blue-light-3 text-chart-blue-dark';
    case 2:
      return 'bg-chart-orange-light-2 text-chart-orange-dark';
    case 3:
      return 'bg-chart-purple-light-2 text-chart-purple-dark';
    case 4:
      return 'bg-rose-50 text-rose-700';
    case 5:
      return 'bg-teal-50 text-teal-800';
    case 6:
      return 'bg-pink-25 text-pink-600';
    case 7:
      return 'bg-fuchsia-25 text-fuchsia-700';
    case 8:
      return 'bg-moss-50 text-moss-600';
    case 9:
      return 'bg-cyan-50 text-cyan-700';
    case 10:
      return 'bg-violet-25 text-violet-700';
    default:
      return 'bg-chart-blue-light-3 text-chart-blue-dark';
  }
};

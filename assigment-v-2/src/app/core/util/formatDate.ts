function formatDateToVietnamese(dateString: string) {
  const date = new Date(dateString);

  // Chuyển đổi từ UTC sang giờ Việt Nam (UTC+7)
  const vietnamTime = new Date(date.getTime() + 7 * 60 * 60 * 1000);

  const day = vietnamTime.getDate().toString().padStart(2, '0');
  const month = (vietnamTime.getMonth() + 1).toString().padStart(2, '0');
  const year = vietnamTime.getFullYear();

  return `${day}/${month}/${year}`;
}

const isoString = '2024-06-07T01:20:37.715Z';
const vietnameseDate = formatDateToVietnamese(isoString);

export { formatDateToVietnamese };

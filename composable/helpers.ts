export const formatBlogDate = (dateString: string | Date): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const shareInPopup = (url: string) => {
  const winWidth = 650;
  const winHeight = 350;
  const winTop = 200;
  const winLeft = screen.width / 2 - winWidth / 2;
  window.open(
    url,
    "sharer",
    "top=" +
      winTop +
      ",left=" +
      winLeft +
      ",toolbar=0,status=0,width=" +
      winWidth +
      ",height=" +
      winHeight,
  );
};

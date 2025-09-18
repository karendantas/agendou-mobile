  export const formatDate = (dateString: string) => {
    const date = new Date(dateString + "T00:00:00");
    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

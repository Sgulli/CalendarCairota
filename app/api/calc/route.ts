"use server";
enum Year {
  AC = "A.C.",
  DC = "D.C.",
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.birthdate) return Response.json({ message: "Error" });

  const cairo = new Date("2005-09-03");
  const date = new Date(body.birthdate);
  const difference = date.getTime() - cairo.getTime();
  // Convert milliseconds to years
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Taking into account leap years
  const differenceInYears = difference / millisecondsInYear;

  // Round down to the nearest whole number to get the complete years
  const years = Math.floor(differenceInYears);

  return Response.json({
    birthdate: `${Math.abs(years)} ${years < 0 ? Year.AC : Year.DC}`,
  });
}

"use server";

import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  console.log(req);

  if (!req.body.birthdate) return Response.json({ message: "Error" });

  const cairo = new Date("2005-09-03");
  const date = new Date(await req.body);
  const difference = cairo.getTime() - date.getTime();
  // Convert milliseconds to years
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Taking into account leap years
  const differenceInYears = difference / millisecondsInYear;

  // Round down to the nearest whole number to get the complete years
  const years = Math.floor(differenceInYears);

  if (years < 0) return Response.json({ birthdate: Math.abs(years) + " A.C." });
  return Response.json({ birthdate: Math.abs(years) + " D.C." });
}

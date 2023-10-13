 import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
//   const t = await request.cookies.get("deneme");
//   if (t) {
//     console.log("aynen");
//     return NextResponse.redirect(new URL("/login" , request.url));
//   }

//   // Eğer "deneme" çerezi yoksa veya t değeri falsy ise middleware devam eder.
//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/", // Middleware'in sadece belirli bir yol için çalışmasını isterseniz burayı güncelleyebilirsiniz.
};
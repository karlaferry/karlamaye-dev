import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validate the form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create the submission for Netlify Forms
    const netlifyFormData = new FormData();
    netlifyFormData.append("form-name", "contact");
    netlifyFormData.append("name", name);
    netlifyFormData.append("email", email);
    netlifyFormData.append("message", message);

    // Submit to Netlify Forms
    const netlifyResponse = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "form-name": "contact",
        name: name,
        email: email,
        message: message,
      }),
    });

    if (!netlifyResponse.ok) {
      throw new Error("Failed to submit to Netlify Forms");
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}

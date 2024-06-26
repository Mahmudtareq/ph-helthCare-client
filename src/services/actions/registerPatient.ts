"use server";

export const resgisterPatient = async (formdata: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`,
    {
      method: "POST",
      body: formdata,
      cache: "no-store",
    }
  );
  const patientInfo = await res.json();
  return patientInfo;
};

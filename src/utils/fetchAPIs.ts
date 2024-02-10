type Post = { id: number; userId: number; title: string; body: string };

// * GET

export const getData = async (str: string) => {
  try {
    const res = await fetch(str);
    const data = res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    } else {
      throw new Error(`Failed to fetch data: Unknown error`);
    }
  }
};

// * POST

export const postData = async (str: string, body: Post) => {
  try {
    const req = await fetch(str, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const res = await req.json();
    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    } else {
      throw new Error(`Failed to fetch data: Unknown error`);
    }
  }
};

// * UPDATE

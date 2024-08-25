export function fetchAllUsers() {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/users");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/orders/userOrders?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchUserInfo(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/users/" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(updateData) {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/users/" + updateData.id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function deleteUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/users/" + userId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function signOut() {
  return new Promise(async (resolve) => {
    resolve({ message: "sign out done" });
  });
}

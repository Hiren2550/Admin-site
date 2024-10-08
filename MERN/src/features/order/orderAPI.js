export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/orders");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchOrderById(orderId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/orders/" + orderId);
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteOrder(orderId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/orders/" + orderId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateOrder(updateData) {
  return new Promise(async (resolve) => {
    const response = await fetch("/api/orders/" + updateData.id, {
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

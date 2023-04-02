import OrderModel from "../persistence/daos/dao-mongoDB/models/order";


export async function newOrder(newOrder) {
 
  const order = await OrderModel.create(newOrder);
  return order;
}
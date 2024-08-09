class RefurbishedSmartphones {
  availableSmartphone = [];
  soldSmartphone = [];
  constructor(retailer, revenue = 0) {
    this.retailer = retailer;
    this.revenue = revenue;
  }

  addSmartphone(model, storage, price, condition) {
    if (!model) {
      throw new Error("Invalid smartphone!");
    }

    if (!Number.isInteger(storage) || storage < 0) {
      throw new Error("Invalid smartphone!");
    }

    if (price < 0) {
      throw new Error("Invalid smartphone!");
    }

    if (!condition) {
      throw new Error("Invalid smartphone!");
    }

    const newSmartphone = {
      model,
      storage,
      price,
      condition,
    };

    this.availableSmartphone.push(newSmartphone);

    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(
      2
    )}$`;
  }

  sellSmartphone(model, desiredStorage) {
    const phone = this.availableSmartphone.filter(
      (phone) => phone.model === model
    );

    if (!phone) {
      throw new Error(`${model} was not found!`);
    }
  }
}

let retailer = new RefurbishedSmartphones("SecondLife Devices");
console.log(retailer.addSmartphone("Samsung S20 Ultra", 256, 1000, "good"));
console.log(retailer.addSmartphone("Iphone 12 mini", 128, 800, "perfect"));
console.log(retailer.addSmartphone("", 512, 1900, "good"));

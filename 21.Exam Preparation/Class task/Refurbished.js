class RefurbishedSmartphones {
  availableSmartphones = [];
  soldSmartphones = [];
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

    this.availableSmartphones.push(newSmartphone);
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
  }

  sellSmartphone(model, desiredStorage) {
    //* Find smartphone in the availableSmartphones array

    const smartphone = this.availableSmartphones.find((phone) => phone.model === model);

    //* If not found throw an error

    if (!smartphone) {
      throw new Error(`${model} was not found!`);
    }
    // *If the found smartphone’s storage is more than or equal to the desiredStorage
    let currentPrice = smartphone.price;
    let insufficient = desiredStorage - smartphone.storage;

    //*If the difference between the smartphone’s storage and the desiredStorage is less or equal to 128 GB – the price gets deducted by 10%!

    if (insufficient > 0 && insufficient <= 128) {
      currentPrice *= 0.9;
    }

    //* If the difference between the smartphone’s storage and the desiredStorage is more than 128 GB  – the price gets deducted by 20%!

    if (insufficient > 0 && insufficient > 128) {
      currentPrice *= 0.8;
    }

    //*remove the smartphone from the availableSmartphones array and add it to the soldSmartphones
    //* array of objects use filter
    this.availableSmartphones = this.availableSmartphones.filter((phone) => phone.model !== model);
    this.soldSmartphones.push({
      model: smartphone.model,
      storage: smartphone.storage,
      price: currentPrice,
    });

    this.revenue += currentPrice;

    return `${model} was sold for ${currentPrice.toFixed(2)}$`;
  }

  upgradePhones() {
    //! result = `` try this
    let resultMessage = [`Upgraded Smartphones:`];

    // * If the length of the availableSmartphones is equal to 0 error

    if (this.availableSmartphones.length === 0) {
      throw new Error("There are no available smartphones!");
    }

    this.availableSmartphones.forEach((phone) => {
      //* double storage
      phone.storage *= 2;

      resultMessage.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
    });

    return resultMessage.join(`\n`);
    // ! Try other method using string instead of array to push it in
    // result += `Upgraded Smartphones:`;
    // result += `${model} / ${storage} GB / ${condition} condition / ${price.toFixed(2)}$`;

    // return result;
  }

  salesJournal(criteria) {
    let criterias = [`storage`, `model`];

    if (!criterias.includes(criteria)) {
      throw new Error("Invalid criteria!");
    }

    let sorters = {
      storage: (a, b) => b.storage - a.storage,
      model: (a, b) => a.model.localeCompare(b.model),
    };
    let messages = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`, `${this.soldSmartphones.length} smartphones sold:`];

    this.soldSmartphones.sort(sorters[criteria]).forEach((phone) => {
      messages.push(`${phone.model} / ${phone.storage} GB / ${phone.price.toFixed(2)}$`);
    });

    return messages.join(`\n`);
  }
}

//! First input
// let retailer = new RefurbishedSmartphones("SecondLife Devices");
// console.log(retailer.addSmartphone("Samsung S20 Ultra", 256, 1000, "good"));
// console.log(retailer.addSmartphone("Iphone 12 mini", 128, 800, "perfect"));
// console.log(retailer.addSmartphone("", 512, 1900, "good"));

//! Second input
// let retailer = new RefurbishedSmartphones("SecondLife Devices");
// retailer.addSmartphone("Samsung S20 Ultra", 256, 1000, "good");
// retailer.addSmartphone("Iphone 12 mini", 128, 800, "perfect");
// retailer.addSmartphone("Xiaomi Redmi Note 10 Pro", 128, 330, "perfect");
// console.log(retailer.sellSmartphone("Samsung S20 Ultra", 256));
// console.log(retailer.sellSmartphone("Xiaomi Redmi Note 10 Pro", 256));
// console.log(retailer.sellSmartphone("Samsung Galaxy A13", 64));

//! Third input

// let retailer = new RefurbishedSmartphones("SecondLife Devices");
// retailer.addSmartphone("Samsung S20 Ultra", 256, 1000, "good");
// retailer.addSmartphone("Iphone 12 mini", 128, 800, "perfect");
// retailer.addSmartphone("Xiaomi Redmi Note 10 Pro", 128, 330, "perfect");
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones("SecondLife Devices");
retailer.addSmartphone("Samsung S20 Ultra", 256, 1000, "good");
retailer.addSmartphone("Iphone 12 mini", 128, 800, "perfect");
retailer.addSmartphone("Xiaomi Redmi Note 10 Pro", 128, 330, "perfect");
retailer.sellSmartphone("Samsung S20 Ultra", 256);
retailer.sellSmartphone("Xiaomi Redmi Note 10 Pro", 256);
console.log(retailer.salesJournal("model"));

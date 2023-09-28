import { products } from "../data/products";

export function isMachineAlreadyFull(currentProducts) {
  const productQuantity = currentProducts.reduce(
    (quantity, currentProduct) => currentProduct.quantity + quantity,
    0
  );
  return productQuantity === getMaxProductQuantity();
}

function getMaxProductQuantity() {
  return products.reduce((quantity, product) => product.quantity + quantity, 0);
}

export function getCurrentEnergyConsumption(components) {
  let currentConsumption = 0;

  components.map((c) => {
    if (c.status === 1) currentConsumption += c.energyConsumption;
    return c;
  });
  return currentConsumption;
}

// If robot arm is on, both of the cooler and the heater can be off. But if not, one of them should start
export function shouldTriggerHeaterOrCooler(components) {
  return (
    components[0].status === 0 &&
    components[1].status === 0 &&
    components[3].status === 0
  );
}

export function toggleHeaterAndCooler(components, mode) {
  if (mode === "cool") {
    return components.map((c) => {
      if (c.id === 0) {
        c.status = 1;
      } else if (c.id === 1) {
        c.status = 0;
      }
      return c;
    });
  } else {
    return components.map((c) => {
      if (c.id === 0) {
        c.status = 0;
      } else if (c.id === 1) {
        c.status = 1;
      }
      return c;
    });
  }
}

export function updateComponentsLights(components, lightsOpen) {
  return components.map((c) => {
    if (c.id === 2) {
      return { ...c, status: lightsOpen };
    } else {
      return c;
    }
  });
}

export function updateComponentsForCancelRequest(components) {
  return components.map((c) => {
    if (c.id === 0) {
      c.status = 0;
    } else if (c.id === 1) {
      c.status = 0;
    } else if (c.id === 3) {
      c.status = 0;
    }
    return c;
  });
}

export function updateComponentsForSelectProduct(components) {
  return components.map((c) => {
    if (c.id === 0) {
      c.status = 0;
    } else if (c.id === 1) {
      c.status = 0;
    } else if (c.id === 3) {
      c.status = 1;
    }
    return c;
  });
}

export function updateComponentsForGiveSelectedProduct(components) {
  return components.map((c) => {
    if (c.id === 0) {
      c.status = 0;
    } else if (c.id === 1) {
      c.status = 0;
    } else if (c.id === 3) {
      c.status = 0;
    }
    return c;
  });
}

export function decreaseSelectedProductQuantity(
  currentProducts,
  selectedProduct
) {
  return currentProducts.map((p) => {
    if (p.id === selectedProduct.id) {
      return {
        ...selectedProduct,
        quantity: selectedProduct.quantity - 1,
      };
    } else {
      return p;
    }
  });
}

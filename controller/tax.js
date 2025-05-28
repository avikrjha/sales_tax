module.exports = {
  async fetchTax(req, res) {
    try {
      const data = req.body;
      function roundTax(tax) {
        return Math.ceil(tax * 20) / 20;
      }

      function isExempt(itemName) {
        const exemptItems = ["book", "chocolate", "pill"];
        return exemptItems.some((exempt) =>
          itemName.toLowerCase().includes(exempt)
        );
      }

      function isImported(itemName) {
        return itemName.toLowerCase().includes("imported");
      }

      function parseItem(line) {
        const match = line.match(/^(\d+) (.+) at (\d+\.\d{2})$/);
        if (!match) return null;
        return {
          quantity: parseInt(match[1]),
          name: match[2],
          price: parseFloat(match[3]),
        };
      }

      function calculateReceipt(inputLines) {
        let totalTax = 0;
        let totalCost = 0;
        const receipt = [];

        inputLines.forEach((line) => {
          const item = parseItem(line);
          if (!item) return;

          let tax = 0;
          if (!isExempt(item.name)) {
            tax += roundTax(0.1 * item.price);
          }
          if (isImported(item.name)) {
            tax += roundTax(0.05 * item.price);
          }

          const finalPrice = item.price + tax;
          totalTax += tax;
          totalCost += finalPrice;

          receipt.push(
            `${item.quantity} ${item.name}: ${finalPrice.toFixed(2)}`
          );
        });

        receipt.push(`Sales Taxes: ${totalTax.toFixed(2)}`);
        receipt.push(`Total: ${totalCost.toFixed(2)}`);

        return receipt
      }

     const result  = calculateReceipt(data)
   
      res.json({
        code : 20,
        msg : "Bill fetch succesfully",
        data  : result
      });
    } catch (error) {
      console.log(error);
    }
  },
};

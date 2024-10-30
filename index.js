jQuery(function(){
  const recapRows = [
    'Periodes',
    'Aquisitions',
    'Achats',
    'Autres',
    'TVA RECUPERABLES',
    'TVA RAS',
    'TVA EN ATTENTE DE RECUPERATION',
  ]

  recapRows.forEach((row) => {
    const recapRow = document.createElement('tr')
    recapRow.innerHTML = `
    <td class="!bg-white">
      <div class="text-right"">${row}</div>
    </td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>`
    $('[data-table="recap-table"] tbody').append(recapRow)
  })

  /* Saisie de factures */
  const invoices = [
    {
      date: '01/01/2024',
      number: '85793687',
      provider: 'Amendis',
      accountNumber: '613555',
      nature: 'EAU NON STOCKABLE',
      tax: 'TVA',
      section: '146',
      amount: '165,76 DH',
      taxRate: '7%',
      taxAmount: '11,60 DH',
      total: '177,43 DH',
    },
    {
      date: '01/01/2024',
      number: '85793687',
      provider: 'Amendis',
      accountNumber: '613555',
      nature: 'EAU NON STOCKABLE',
      tax: 'TVA',
      section: '146',
      amount: '165,76 DH',
      taxRate: '7%',
      taxAmount: '11,60 DH',
      total: '177,43 DH',
    },
    {
      date: '01/01/2024',
      number: '85793687',
      provider: 'Amendis',
      accountNumber: '613555',
      nature: 'EAU NON STOCKABLE',
      tax: 'TVA',
      section: '146',
      amount: '165,76 DH',
      taxRate: '7%',
      taxAmount: '11,60 DH',
      total: '177,43 DH',
    },
    {
      date: '01/01/2024',
      number: '85793687',
      provider: 'Amendis',
      accountNumber: '613555',
      nature: 'EAU NON STOCKABLE',
      tax: 'TVA',
      section: '146',
      amount: '165,76 DH',
      taxRate: '7%',
      taxAmount: '11,60 DH',
      total: '177,43 DH',
    },
    {
      date: '01/01/2024',
      number: '85793687',
      provider: 'Amendis',
      accountNumber: '613555',
      nature: 'EAU NON STOCKABLE',
      tax: 'TVA',
      section: '146',
      amount: '165,76 DH',
      taxRate: '7%',
      taxAmount: '11,60 DH',
      total: '177,43 DH',
    },
  ]
  
  invoices.forEach((invoice) => {
    $('[data-table="invoices"] tbody').append(createInvoiceRow(invoice))
  })

  const invoicesFooter = document.createElement('tr')
  invoicesFooter.classList.add('[&>td:not(:first-child)]:!bg-[#C5D9F1]', '[&>td]:!py-3')
  invoicesFooter.innerHTML = `
    <td colspan="7" class="!border-0"></td>
    <td class="!text-right">221,97 DH</td>
    <td colspan="2" class="!text-right">16,19 DH</td>
    <td>DH</td>
  `
  $('[data-table="invoices"] tbody').append(invoicesFooter)
});

function createInvoiceRow (invoice) {
  const tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${invoice.date}</td>
    <td>${invoice.number}</td>
    <td>${invoice.provider}</td>
    <td>${invoice.accountNumber}</td>
    <td>${invoice.nature}</td>
    <td>${invoice.tax}</td>
    <td>${invoice.section}</td>
    <td>${invoice.amount}</td>
    <td>${invoice.taxRate}</td>
    <td>${invoice.taxAmount}</td>
    <td>${invoice.total}</td>
  `
  return tr
}
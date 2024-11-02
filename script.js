function insert_Row() {
    //Write your code here
	function insert_Row() {
    //Write your code here
	
    const newRow=document.createElement('tr');

    const cell1=document.createElement('td');
    cell1.textContent='New Cell1';
    const cell2=document.createElement('td');
    cell2.textContent='New Cell2';

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
	const tableElement=document.querySelector('table')
    tableElement.insertBefore(newRow, tableElement.firstChild);
}
}

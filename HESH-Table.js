// Создание хеш-таблицы с помощью Map
let hashTable = new Map();

// Хеширование данных
function hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash;
}

// Функция для ручного добавления данных
function addData(key, value) {
    hashTable.set(hash(key), value);
    renderTable();
}

// Функция для вывода данных по ключу
function getData(key) {
    return hashTable.get(hash(key));
}

// Функция для удаления данных
function deleteData(key) {
    hashTable.delete(hash(key));
    renderTable();
}

// Кнопка для добавления данных
document.getElementById("addButton").addEventListener("click", function() {
    let key = document.getElementById("AddKeyInput").value;
    let value = document.getElementById("valueInput").value;
    addData(key, value);
});

// Кнопка для вывода данных по ключу
document.getElementById("getDataButton").addEventListener("click", function() {
    let key = document.getElementById("GiveKeyInput").value;
    let value = getData(key);
    if (key === "" || value === undefined) {
        let li = document.createElement("li");
        li.textContent = "Данные по ключу не найдены или отсутствуют в таблице";
        document.getElementById("dataList").appendChild(li);
    } else {
        let li = document.createElement("li");
        li.textContent = value;
        document.getElementById("dataList").appendChild(li);
    }
});


// Кнопка для удаления данных
document.getElementById("deleteButton").addEventListener("click", function() {
    let key = document.getElementById("DeleteKeyInput").value;
    deleteData(key);
});

// Функция для очистки списка
function clearList() {
    document.getElementById("dataList").innerHTML = "";
}

// Кнопка для очистки списка
document.getElementById("clearButton").addEventListener("click", function() {
    clearList();
});

// Кнопка для показа/скрытия таблицы
document.getElementById("toggleTableButton").addEventListener("click", function() {
    let table = document.getElementById("hashTable");
    if (table.style.display === "none") {
        table.style.display = "table";
    } else {
        table.style.display = "none";
    }
});

// Функция для вывода таблицы
function renderTable() {
    let table = document.getElementById("hashTable");
    let tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    for (let [key, value] of hashTable) {
        let row = tbody.insertRow();
        let keyCell = row.insertCell();
        let valueCell = row.insertCell();
        keyCell.textContent = key;
        valueCell.textContent = value;
    }
}

renderTable();
const input = document.getElementById("ip");
        const output = document.querySelector(".list");
        const getDateInput = document.getElementById("date");

        let html = "";
        const todo = [];

        function getTodo() {
            const todoItem = input.value;
            const selectedDate = getDateInput.value;

            if (todoItem !== "") {
                input.placeholder = "Todo";
                input.style.border = "1px solid gray";
                
                todo.push({
                   item: todoItem,
                    date: selectedDate
                   });

                displayTodo();
                input.value = ""; // Resetting
                getDateInput.value = ""; // Resetting
            } else {
                input.style.border = "1px solid red";
                input.placeholder = "Enter a Todo";
            }
        }

        function displayTodo() {
            html = "";

            todo.forEach((item, index) => {
              const dateObject = new Date(item.date);
              const time = dateObject.toLocaleTimeString();
              const date = dateObject.toLocaleDateString();
              html += `<div class="itm"><strong>${index + 1})</strong> ${item.item}</div>
              <div class="time">${time}</div>
              <div class="datz">${date}</div>
              <button class="bt-2" onclick="deleteTodo(${index})">Delete</button>`;
          });

            output.innerHTML = html;
        }

        function deleteTodo(index) {
            todo.splice(index, 1);
            displayTodo();
        }
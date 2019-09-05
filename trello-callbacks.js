function getBoard(callback) {
  return setTimeout(function() {
    let board = {
      id: "def453ed",
      name: "Thanos"
    };
    callback(board);
  }, 1000);
}

function getLists(boardId, callback) {
  return setTimeout(function() {
    let lists = {
      def453ed: [
        {
          id: "qwsa221",
          name: "Mind"
        },
        {
          id: "jwkh245",
          name: "Space"
        },
        {
          id: "azxs123",
          name: "Soul"
        },
        {
          id: "cffv432",
          name: "Time"
        },
        {
          id: "ghnb768",
          name: "Power"
        },
        {
          id: "isks839",
          name: "Reality"
        }
      ]
    };
    callback(lists[boardId]);
  }, 1000);
}

function getCards(listId, callback) {
  return setTimeout(function() {
    let cards = {
      qwsa221: [
        {
          id: "ornd494",
          description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
        },
        {
          id: "lwpw123",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        }
      ]
    };
    callback(cards[listId]);
  }, 1000);
}

// Task 1 board -> lists -> cards for list qwsa221
// Task 2 board -> lists -> cards for list qwsa221 and cards for list jwkh245 simultaneously
// Task 3 board -> lists -> cards for all lists simultaneously
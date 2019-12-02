// click listener for devour buttons
$('.devour-button').click(function() {
  const id = $(this).attr('id');
  clickDevour(id);
});

// function to send a put request using axios
const clickDevour = id => {
  // send put request to /api/burgers/id
  axios.put(`/api/burgers/${id}`).then(res => {
    console.log('Update success.');
    location.reload();
  }),
    err => {
      console.log(err);
    };
};

// click listener for devour buttons
$('.delete-button').click(function() {
  const data = $(this).attr('data');
  console.log(data);
  clickDelete(data);
});

// function to send a put request using axios
const clickDelete = data => {
  // send put request to /api/burgers/id
  axios.delete(`/api/burgers/${data}`).then(res => {
    console.log('Update success.');
    location.reload();
  }),
    err => {
      console.log(err);
    };
};

let brahmieverywhere = [
    "https://cdn.gulte.com/wp-content/uploads/2021/02/Brahmi.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC28sQJg1t_5PLhMugzfXR_cAfKMdtJf4C5Q&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDxBKZQ_9_ACQ_6XyLfId8r5N6NCOOXe8Qg&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HequlTLTy85FttUEHANpkchVD-ksAKm_4g&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBjorJIhgzprsCAEiaUYGn-OwCbpmt2QUZQ&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaiD1jCEcVsCB1sDHXmRi5rsy3qaGGtIP5A&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CELgD8eNoGU-aG0DkNn_gBZBk5HOB0TcQA&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkBQq64Cz_yfoMdoCtW0-6yoHR3Gjk5gPog&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pTBR9mOkAlEl4YaE2KXfD1vY2MzTXCB-8A&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNMcfcJKdX98YYHi4wUfk_ICeTIXkjzG-ow&usqp=CAU.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cajkYn4THyzswab8lUjS8hQ_sTDh_dDUdg&usqp=CAU.jpg"
  ];
  
  const images = document.getElementsByTagName("img");
  for(let i = 0; i < images.length; i++){
      const randomImg = Math.floor(Math.random() * brahmieverywhere.length);
      images[i].src = brahmieverywhere[randomImg];
  }
  
  const headers = document.getElementsByTagName("h2");
  for(let i = 0; i < headers.length; i++){
      headers[i].innerText = "Made by Saipavan Vadapally";
  }
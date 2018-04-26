<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Checkout Mirror Fashion</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <meta name="viewport" content="width=device-width">
  </head>

  <body>
    <div class="jumbotron">    
      <div class="container">
        <h1>Ótima escolha!</h1>
        <p>Obrigado por comprar na Mirror Fashion!
        Preencha seus dados para efetivar a compra.</p>

        <h2>Sua compra</h2>

        <dl>
          <dt>Cor</dt>
          <dd><?php print $_GET['cor'] ?></dd>

          <dt>Tamanho</dt>
          <dd><?php print $_GET['tamanho'] ?></dd>
        </dl>

      </div>

    </div>
  </body>
</html>

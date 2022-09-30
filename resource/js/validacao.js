   var name = document.getElementById("nome");

                    function enviardados() {

                        if (document.dados.tx_nome.value == "")
                        {
                            alert("Preencha campo NOME corretamente!");
                            document.dados.tx_nome.focus();
                            return false;
                        }


                        if (document.dados.tx_email.value == "" || document.dados.tx_email.value.indexOf('@') == -1 || document.dados.tx_email.value.indexOf('.') == -1)
                        {
                            alert("Preencha campo E-MAIL corretamente!");
                            document.dados.tx_email.focus();
                            return false;
                        }

                        if (document.dados.tx_mensagem.value == "")
                        {
                            alert("Preencha o campo MENSAGEM!");
                            document.dados.tx_mensagem.focus();
                            return false;
                        }

                        if (document.dados.tx_mensagem.value.length == "")
                        {
                            alert("Por favor deixa seu COMENTÁRIO!");
                            document.dados.tx_mensagem.focus();
                            return false;
                        } else {
                            alert("Enviado com sucesso!");
                            document.getElementById('tx_nome').value = '';
                            document.getElementById('tx_email').value = '';
                            document.getElementById('tx_mensagem').value = '';
                            window.location.href = "index.html/contato";
                            document.dados.tx_nome.focus();
                        }

                        return true;
                    }


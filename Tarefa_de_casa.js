/*
 Criando classes com abstrações solicitadas na aula 161
*/

/* 1 - Produto para uma loja  */

class Produto{

     constructor(){

        this.codigo ='';
        this.descricao ='';
        this.preco = '';
        this.disponibilidade ='';
        this.acompanhamentos = [];
        
     }

     Vender(){
         console.log('vendendo');
     }

     Descartar(){

        console.log('vendendo');
    }

    EntregarDomicilio(){

        console.log('vendendo');
         
    }

    AtualizarDados(){

        console.log('atualizando')
    }
    DarBaixaNoEstoque(){

        console.log('atualizando');
    }


}


/*2 - Carrinho de compras para loja */

class Carrinho{

    constructor(){

        this.listaDeProdutos =[];
        this.valorDosProdutosSomados = [];
        this.listaDeCodigoDosProdutos = [];
        this.ProdutosParaEnvio = [];
        this.ProdutosParaRecolherNaloja =[];
        this.ListaDeModosDePagamento=[]; 
        this.listaDeProdutosComDesconto =[];
        this.valorTotal = 0;

    }

                AdicionarProduto(){
                    console.log('Produto adicionado ');

                }
                RemoverProduto(){
                    console.log('Produto adicionado ');
                    
                }
                EditarProduto(){
                    console.log('Produto adicionado ');
                    
                }
                ListarProduto(){
                    console.log('Produto adicionado ');
                    
                }

                Calculafrete(){
                    console.log('Produto adicionado ');
                    
                }

                CalculaDesconto(){
                    console.log('Produto adicionado ');
                    
                }

                ConfirmaCompra(){
                    console.log('Produto adicionado ');
                    
                }


}

/*3 - Comida para sistema de cardapio*/

class Comida{
      
      constructor(){

         this.preco = 0;
         this.descricao = '';
         this.tempoDePreparo = '';
         this.vendeFracionado = false;
         this.alimentaQuantasPessoas = 2;
         this.peso = 0;
         this.unidadeDeVenda ='UNI';
         this.promocao = false;
         this.taxaDeServico = true;

      }

      Vender(){
         console.log('vendendo ....');
      }

      Preparar(){
         console.log('Preparando ...')
      }

      Cancelar(){
        console.log('Cancelado ...')
         
      }
        
}


/*4 - Personagem para jogo de rpg*/


class Personagem{
     
     constructor(){

         this.classe = '';
         this.nivel = '';
         this.nome = '';
         this.habilidades = [];
         this.armas = [];
         this.velocidade = [];
         this.dinheiro = '';
         this.tempoDeJogo = '';


     }

            SubirDeNivel(){

                console.log('Evoluindo');

            }

            Batalhar(){
                console.log('Batalhando');
                
            }
            PegarArmas(){
                console.log('Equipando');
                
            }

            PegarItens(){
                console.log('Colhendo');
            }

            DescartarArmas(){
                console.log('Desequipar ');

            }

            DescartarItens(){
                console.log('Descartar');

            }

            EditarItens(){
                console.log('Editar item');

            }

            EditarArmas(){
                console.log('Editar armas');

            }
            FalarFraseDeefeito(){
                console.log('Falando');
            }
            
            Movimentar(){
                console.log('Andando');

            }

}
/*5 - carro pra sistema de aluguel de carro */

class Carro{

     constructor(){

         this.marca = '';
         this.ano = '';
         this.modelo = '';
         this.placa = '';
         this.valorDiaria = '';
         this.valorSemana = '';
         this.valorMes = '';
         this.seguro = '';
         this.disponivel = false;
         this.alugado = false;

     }

     Alugar(){
        console.log('Alugando');
     }

     Devolver(){
         console.log('Devolvido');

     }
     ConferirEstado(){
         console.log('avaliando');
     }
     manutencao(){
         console.log('concertando');
     }

}

/*6 - Usuário para rede social */

class Usuario{

     constructor(){

         this.nome = '';
         this.email = '';
         this.idade = '';
         this.endereco ='';
         this.interesses = [];
         this.estadoCivil = '';
         this.id = '';
         this.amigos =[];
         this.online = false;
         this.contatos = [];
         this.login = '';
         this.senha = '';
         

     }

            CadastrarPerfil(){
                console.log('Cdastrado');
            }
            ExcluiPerfil(){
                console.log('Excluido');
            }
            AtualizaPerfil(){
                console.log('atualizado');
            }
            PublicaNoPerfil(){
                console.log('publicado');

            }
            ExcluiPublicacao(){
                console.log('excluida');

            }
             LogIn(){
                console.log('Logado');

            }
              LogOut(){
                console.log('Desconectado');

            }

       
}

/* 7 - Video para streamer */

class Video{
     constructor(){
        this.autor ='';
        this.tempoDeDuracao ='';
        this.conteudo ='';
        this.classificacao = '';
        this.resolucao = '';
        this.tamanho = '';
        this.dataPublicacao = '';
        this.horaPublicacao = '';
        this.dataExclusão = '';
        this.horaExclusao = '';
        this.dataUpload = '';
        this.horaUpload = '';
        this.monetizado = false;
        this.views = 0;
        this.likes = 0;
        this.deslikes = 0;
        this.comentarios = [];
     }


     VideoPlay(){
         console.log('Rodando')
     }

      VideoPause(){
         console.log('Parado')
     }

     VideoAvanca(){
         console.log('Avancando ')
         
     }


}
/* 8 - Aluno para sistemna de gestão escolar */

class Aluno{

    constructor(){

        this.nome ='';
        this.idade = '';
        this.serie ='';
        this.notas = [];
        this.endereco = '';
        this.contatos = '';
        this.pais = [];
        this.aprovado = false;
        this.matricula = 0000;

    }

            Matricular(){
                console.log('matriculado');
            }
            Aprovar(){
                console.log('aprovado');

            }
            Reprovar(){
                console.log('reprovado');
            }
            ApagarMatricula(){

                console.log('apagado');
            }
            AtualizarMatricula(){

                console.log('Atualizado');
            }
            TransferirAluno(){

                console.log('transferido');
            }
    



}

/*9 - Encomenda*/

class Encomenda{
     
      constructor(){
         this.codigo = 0;
         this.descricao = '';
         this.quantidade = 0;
         this.valorFrete = 0;
         this.itensNoPacote = [];
         this.metodosDePagamento = [];
         this.destinoDoPacote = '';
         this.entregador = '';
         this.dataDeEnvio ='';
         this.dataDeCancelamentoDoEnvio ='';

      }

      Enviar(){
        console.log('Enviado');
      }
      CancelarEnvio(){
        console.log('Cancelado');
      }
      ConferePacote(){
        console.log('Conferido')
      }

      ConfereItem(){ 
        console.log('Itens Conferidos')
      }
      AdicionaItemNoPacote(){
         console.log('adicionado');
      }
      LacraPacote(){
          console.log('Lacrado')
      }

}

/*10 - Banda para serviço de streaming */

class Banda{
    constructor(){

        this.nome = '';
        this.Albuns = [];
        this.ritmosMusicais = [];
        this.capasDoAlbum =[];
        this.listaDealbuns = [];
        this.listaDeMusicas = [];
        this.dataDeCadastro = '';
        this.dataDeExclusao ='';

    }

        TocarMusica(){
            console.log('Tocando')
        }
        
        PararMusica(){
            console.log('Parado')
        }
        TocarAlbum(){
            console.log('Tocando album')
            
        }
        IncluirNaPlayList(){
            console.log('inclusa')
        }
        ExcluiDaPlaylist(){
            console.log('excluido')

        }
}


/*11 - Pedido de sistema de delivery */

class Pedido{

     constructor(){
        this.codigo = 0000;
        this.cliente = '';
        this.valorPedido = 00,00;
        this.produtosPedido = [];
        this.enderecoEntrega ='';
        this.formasDePagamento =[];
        this.pedidoEmRota = false;
        this.taxaDeEntrega = 00,00;
     }

        AceitarPedido(){
            console.log('Aceito');
        }

        RejeitarPedido(){
            console.log('Rejeitado');
        }

        FecharVenda(){
            console.log('venda fechada');
        }

        DarSaida(){
            console.log('Motoqueiro saiu');
        }

}


/*12 - Agendamento para sistema de dentista*/

class Agendamento{
      
    constructor(){

        this.codigo = 0000;
        this.dataHora = [];
        this.paciente = '';
        this.procedimentos =[];
        this.dentista = '';
        this.custoTotalPrevisto = 0000;
        this.custosAdicionais =[];
        
    }

        Agendar(){
            console.log('Agendado')
        }
        CancelaAgendamento(){
            console.log('Agendado')
        }
        EditarAgendamento(){
            console.log('Editado')
        }
}

/* 13 - classe de conexão de banco de dados para o sequelize */

class Conexao {
     
    constructor(){
        this.usuario ='';
        this.banco = '';
        this.senha ='';
        this.dialect = '';
        this.timeZone = '';
        this.consulta = '';
    }

    ExecutarQuerie(){
        console.log('executando')
    }
    Conectar(){
        console.log('conectando');
    }
    Desconectar(){
        console.log('Desconectado')
    }


}

/*14 - Mensagem do watsapp*/

class Mensagem{
     constructor(){

        this.contato = '';
        this.dataHora ='';
        this.conteudo ='';
        this.arquivosDeAudio = [];
        this.arquivosDeVideo =[];
        this.imagens = [];
        this.documentos = [];
        this.maisDeUmContato = false;
        this.contatosDestinatario = [];
        this.EnvioFalhou = false;

     }

        EnviaMensagem(){
            console.log('Enviando')
        }
        ReceberMensagem(){
            console.log('Recebendo')

        }
        ApagarMensagem(){
            console.log('Mensagem pagada')
        }

        EditarMensagem(){
            console.log('MensagemEditada')
        }


}

/*15 - iventario de personagem, para jogo de rpg */

class Iventario{

      constructor(){

         this.codigoInventario = 000;
         this.porcoes = [];
         this.espadas = [];
         this.cajados = [];
         this.capacetes = [];
         this.arcos = [];
         this.itensDeMissao = [];
         this.botas = [];
         this.ingredientesDePorcao = [];

    }

      AdicionarItem(){
         console.log('Item Adicionado')
      }

      EditarItem(){
        console.log('Editado')
      }

      EquiparItem(){
        console.log('Equipado')
      }

      ExcluirItem(){
         console.log('Item excluido')
      }


}

/* 16 - Grupo de rede social  */

class Grupo{
    
    constructor(){

        this.nome ='';
        this.listaDeUsuarios =[];
        this.descricao = '';
        this.quantidadeDeUsuarios = '';
        this.dataHoraCriacao = '';
        this.normasDoGrupo = [];
        this.faixaEtaria = '';

    }

    AdicionarContato(){

        console.log('Adicionado');
    }
    ApagarUsuario(){

        console.log('Apagado')
    }
    EditarUsuario(){

        console.log('Atualizado')
    }
    EditarLista(){
        console.log('Atualizada')

    }
    ApagarGrupo(){
        console.log('Apagado');
    }

}

/* 17 - player de video */

class Vplayer{
      constructor(){
          
          this.titulo = '';
          this.autor = '';
          this.formato = '';
          this.tamanho = '';
          this.duracao = '';
          this.resolucao = 0000;
          this.compativel = false;
          this.url = '';
      }


      Play(){
        console.log('Rodando')
      }
      Pause(){
        console.log('Parado')
      }
      Avanca(){
        console.log('Avançar')
      }


}

/*18 - Historie do instagram*/

class Storie{

     constructor(){
        this.dataHoraCriacao = '';
        this.dataHoraPublicacao ='';
        this.quantidadeVisualizacoes =0000;
        this.quantidadeReacoes = 0000;
        this.reacoes = [];
        this.autor = '';
        this.tempoDeDuracao = '';
        this.online = false;
     }

     Publicar(){
        console.log('Publicado');
     }
     Apagar(){
        console.log('Apagado')
     }
     Editar(){

        console.log('Editando')
     }
}


/*19 - Formulario de busca */

class BuscaForm{
   
     constructor(){
        this.caracteres = [];
        this.fonteOnlline = false;
        this.formasDeBusca = [];
        this.caracteresSecundarios = '';
        this.dataHoraBusca = '';
        this.retorno ='';

     }

     Buscar(){
         console.log('Buscando')
     }
     EditarParametros(){
        console.log('Prametros alterados')
     }
     CancelaBusca(){
         console.log('Busca cancelada')
     }

     MostrarRetorno(){
        console.log('Retorno');
     }
      
}

/* 20 Busca do google */

class Pesquisa{

     constructor(){
        this.caracteres = [];
        this.fonteOnlline = false;
        this.caracteresSecundarios = '';
        this.dataHoraBusca = '';
        this.autorBusca = '';
        this.dadosBusca = ''; 
        this.idiomaBusca ='';        
     }

     Pesquisar(){
        console.log('Pesquisando ');
     }

     CancelarPesquisa(){
         console.log('cancelado')
     }
     TratarErrosDeGrafia(){
        console.log('corrigido')
         
     }
}



/*21 - Notificação do facebook*/

class Notificacao{
     constructor(){
        this.destinatario = '';
        this.remetente = '';
        this.MotivoNotificacao = '';
        this.dataHoraNotificacao = '';
        this.NotificacaoVista = false;
        this.NotificacaoSilenciada = false;
        this.NotificacaoIgnorada = false;
     }


     Notificar(){
        console.log('Notificado')
     }

     CancelarNotificacao(){
        console.log('Cancelada')
     }
}

/*22 - Curso da Udemy */

class Curso{
     constructor(){

        this.professor = '';
        this.autor ='';
        this.titulo ='';
        this.sessoes = [];
        this.duracao ='';
        this.dataHoraPublicacao= '';
        this.valor = '';
        this.alunos = [];
        this.duvidas = [];
        this.quantidadeVendida = 0000;
        this.estrelas =0000;

     }

     publicar(){
        console.log('Online')
     }
     Editar(){
        console.log('edição salva')
     }
     Apagar(){
        console.log('Curso apagado')
     }
     SuspenderDisponibilidade(){
        
        console.log('Curso suspenso')

     }
}
  
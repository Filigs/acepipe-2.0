-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 30-Mar-2023 às 18:40
-- Versão do servidor: 10.3.38-MariaDB-cll-lve
-- versão do PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `acepipep_inventory`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `Produto`
--

CREATE TABLE `Produto` (
  `id` int(255) NOT NULL,
  `nome` varchar(50) NOT NULL COMMENT '<=50 chars',
  `categoria` enum('Pastelaria','Tostas e Torradas','Sandes','Pequeno Almoço Inglês','Bebidas','Sumos Naturais de Fruta','Granizados','Bebidas Espirituosas','Cocktails','Tapas','Dose de Batatas Fritas','Vinhos','Gelados Bola','Taças de Gelado','Crepes','Panquecas','Acepipe Special','Bubble Waffles','Waffles','Batidos','Cafetaria','Extras','Saladas','Smoothies','Bacon Rolls') NOT NULL,
  `igredientes` varchar(200) NOT NULL,
  `preco` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `Produto`
--

INSERT INTO `Produto` (`id`, `nome`, `categoria`, `igredientes`, `preco`) VALUES
(1, 'Pastel de Nata', 'Pastelaria', '', '1.20'),
(2, 'Bolos Variados', 'Pastelaria', '', '1.50'),
(3, 'Bolo à Fatia', 'Pastelaria', '', '2.80'),
(4, 'Meia Torrada', 'Tostas e Torradas', '', '1.10'),
(5, 'Torrada', 'Tostas e Torradas', '', '1.90'),
(6, 'Tosta Queijo ou Fiambre', 'Tostas e Torradas', '', '3.30'),
(7, 'Tosta Queijo e Cebola', 'Tostas e Torradas', '', '3.90'),
(8, 'Tosta Mista', 'Tostas e Torradas', '', '3.50'),
(9, 'Tosta de Frango', 'Tostas e Torradas', '', '5.40'),
(10, 'Tosta de Atum', 'Tostas e Torradas', '', '5.40'),
(11, 'Tosta de Presunto', 'Tostas e Torradas', '', '4.20'),
(12, 'Pão com Manteiga', 'Sandes', '', '1.10'),
(13, 'Sandes Queijo ou Fiambre', 'Sandes', '', '2.90'),
(14, 'Sandes Mista', 'Sandes', '', '3.20'),
(15, 'Sandes Presunto', 'Sandes', '', '4.20'),
(16, 'Sandes Frango ', 'Sandes', '', '5.10'),
(17, 'Sandes Atum', 'Sandes', '', '5.10'),
(18, 'Sandes de Chouriço', 'Sandes', '', '4.20'),
(19, 'Pequeno Almoço Inglês', 'Pequeno Almoço Inglês', '1 Bacon,1 Salsicha,1 Ovo, ½ Torrada e Feijão com Tomate ', '5.90'),
(20, 'Pequeno Almoço Inglês Duplo', 'Pequeno Almoço Inglês', '2 Bacons, 2 Salsichas, 2 Ovos, 1 Torrada e Feijão com Tomate', '8.90'),
(21, 'Água sem Gás', 'Bebidas', '', '1.20'),
(22, 'Água com Gás', 'Bebidas', '', '1.40'),
(23, 'Água com Gás (Sabor)', 'Bebidas', '', '1.80'),
(24, 'Água Tónica', 'Bebidas', '', '2.00'),
(25, 'Néctar', 'Bebidas', '', '1.80'),
(26, 'Sumo de Ananás / Maçã', 'Bebidas', '', '1.50'),
(27, 'Refrigerantes Lata', 'Bebidas', '', '2.00'),
(28, 'Imperial', 'Bebidas', '', '1.80'),
(29, 'Shandy', 'Bebidas', '', '2.00'),
(30, 'Caneca', 'Bebidas', '', '3.20'),
(31, 'Caneca Shandy', 'Bebidas', '', '3.40'),
(32, 'Cerveja Garrafa (0.33cl)', 'Bebidas', '', '1.90'),
(33, 'Cerveja Garrafa (0% Álcool)', 'Bebidas', '', '2.00'),
(34, 'Redbull', 'Bebidas', '', '3.50'),
(35, 'Somersby', 'Bebidas', '', '3.50'),
(36, 'Smirnoff Ice', 'Bebidas', '', '4.50'),
(37, 'Sumo Natural de Fruta', 'Sumos Naturais de Fruta', '', '4.50'),
(38, 'Limonada', 'Sumos Naturais de Fruta', '', '2.50'),
(39, 'Sumo de Laranja', 'Sumos Naturais de Fruta', '', '2.90'),
(40, 'Sumo de Laranja com Álcool ', 'Sumos Naturais de Fruta', '', '5.90'),
(41, 'Granizado Pequeno', 'Granizados', '', '2.50'),
(42, 'Granizado Grande', 'Granizados', '', '4.50'),
(43, 'Granizado Pequeno com Álcool', 'Granizados', '', '5.00'),
(44, 'Granizado Grande com Álcool', 'Granizados', '', '7.50'),
(45, 'Gin', 'Bebidas Espirituosas', '', '5.00'),
(46, 'Gin Tónico', 'Bebidas Espirituosas', '', '6.00'),
(47, 'Rum', 'Bebidas Espirituosas', '', '4.50'),
(48, 'Redbull Vodka', 'Bebidas Espirituosas', '', '6.50'),
(49, 'Vodka', 'Bebidas Espirituosas', '', '4.50'),
(50, 'Whisky', 'Bebidas Espirituosas', '', '4.50'),
(51, 'Triple Sec', 'Bebidas Espirituosas', '', '4.50'),
(53, 'Vinho do Porto', 'Bebidas Espirituosas', '', '2.50'),
(54, 'Licores', 'Bebidas Espirituosas', '', '2.50'),
(55, 'Aguardente', 'Bebidas Espirituosas', '', '3.00'),
(56, 'Bacardi', 'Bebidas Espirituosas', '', '4.50'),
(57, 'Tábua de Enchidos Pequena', 'Tapas', '', '11.00'),
(58, 'Tábua de Queijos Pequena', 'Tapas', '', '11.00'),
(59, 'Tábua Mista de Queijos e Enchidos Pequena ', 'Tapas', '', '15.00'),
(60, 'Tábua de Enchidos Grande', 'Tapas', '', '14.00'),
(61, 'Tábua de Queijos Grande', 'Tapas', '', '14.00'),
(62, 'Tábua Mista de Queijos e Enchidos Grande ', 'Tapas', '', '18.50'),
(64, 'Copo de Vinho', 'Vinhos', '', '3.20'),
(65, 'Copo de Vinho Especial ', 'Vinhos', '', '4.50'),
(67, 'Mateus Rosé', 'Vinhos', '', '12.90'),
(68, 'Foral de Portimão (Branco)', 'Vinhos', '', '12.90'),
(69, 'Planalto Seco (Branco)', 'Vinhos', '', '15.90'),
(70, 'Casal Garcia (Verde)', 'Vinhos', '', '12.90'),
(71, '1 Bola', 'Gelados Bola', '', '2.50'),
(72, '2 Bolas', 'Gelados Bola', '', '4.00'),
(73, '3 Bolas', 'Gelados Bola', '', '5.60'),
(74, 'Banana Split', 'Taças de Gelado', 'Banana, 2 Bolas de Gelado, Topping de Chocolate, 1 Bolacha e Chantilly', '6.80'),
(75, 'Caramel Sunset', 'Taças de Gelado', '1 Bola de Gelado de Baunilha,1 Bola de Gelado de Caramelo, Topping de Caramelo, Nougat de Amêndoa, 1 Bolacha e Chantilly', '6.80'),
(76, 'Taça de Frutas', 'Taças de Gelado', '1 Bola de Gelado de Morango, 1 Bola de Gelado de Baunilha, Misto de Frutas, Topping de Morango, 1 Bolacha e Chantilly', '7.50'),
(77, 'Taça Oreo', 'Taças de Gelado', '1 Bola de Gelado de Cookie & Cream ,1 Bola de Gelado de Baunilha, Bolachas Oreo, Topping de Chocolate, Bolacha e Chantilly', '7.50'),
(78, 'Taça Kinder Bueno', 'Taças de Gelado', '1 Bola de Gelado de Baunilha, 1 Bola de Gelado de Chocolate e Avelã, Nutella, Kinder Bueno, Nougat de Amêndoa, Bolacha e Chantilly ', '7.50'),
(157, 'Construa a Sua Taça', 'Taças de Gelado', '2 Bolas de Gelado, 1 Topping, 1 Cobertura, 1 Bolacha e Chantilly', '7.50'),
(158, 'Crepe Açucar e Canela', 'Crepes', 'Crepe, Açucar em Pó e Canela', '3.90'),
(159, 'Crepe Nutella ou Topping ', 'Crepes', 'Crepe, Nutella ou Topping à Escolha e Chantilly', '4.90'),
(160, 'Crepe Nutella e Morangos', 'Crepes', 'Crepe, Nutella, Morangos e Chantilly ', '5.90'),
(161, 'Crepe Mel e Nozes', 'Crepes', 'Crepe, Mel, Nozes e Chantilly', '5.50'),
(162, 'Crepe Banana e Chocolate', 'Crepes', 'Crepe, Banana, Topping de Chocolate e Chantilly', '5.90'),
(163, 'Crepe Oreo', 'Crepes', 'Crepe, Chocolate, Bolachas Oreo, Chantilly', '6.20'),
(164, 'Crepe Suzette', 'Crepes', 'Crepe, Licor de Laranja, 2 Bolas de Gelado de Baunillha, Raspa de Laranja e Hortelã', '7.50'),
(165, 'Crepe Kinder Bueno', 'Crepes', 'Crepe, Nutella, Kinder Bueno e Chantilly', '6.20'),
(166, 'Crepe Frutas e Gelado', 'Crepes', 'Crepe, Misto de Frutas, 1 Bola de Gelado de Baunilha, 1 Bola de Gelado de Morango e Chantilly', '8.60'),
(167, 'Crepe Acepipe', 'Crepes', 'Crepe de Chocolate, Misto de Frutas, Nougat de Amêndoa, Chocolate, Caramelo, 1 Bola de Gelado de Chocolate, 1 Bola de Gelado de Caramelo e Chantilly', '9.50'),
(168, 'Panquecas Açucar e Canela', 'Panquecas', 'Panquecas, Açucar em Pó e Canela', '3.90'),
(169, 'Panquecas Nutella ou Topping', 'Panquecas', 'Panquecas,Nutella ou Topping à Escolha e Chantilly', '4.90'),
(170, 'Panquecas Nutella e Morangos', 'Panquecas', 'Panquecas, Nutella, Morangos e Chantilly', '5.90'),
(171, 'Panquecas Mel e Nozes', 'Panquecas', 'Panquecas, Mel, Nozes e Chantilly', '5.50'),
(172, 'Panquecas Banana e Chocolate', 'Panquecas', 'Panquecas, Banana, Topping de Chocolate e Chantilly', '5.90'),
(173, 'Panquecas Oreo', 'Panquecas', 'Panquecas, Nutella, Bolachas Oreo, Chantilly', '6.20'),
(174, 'Panquecas Kinder Bueno', 'Panquecas', 'Panquecas, Nutella, Kinder Bueno e Chantilly', '6.20'),
(175, 'Panquecas de Frutas e Gelado', 'Panquecas', 'Panquecas, Misto de Frutas, 1 Bola de Gelado de Baunilha, 1 Bola de Gelado de Morango e Chantilly', '8.60'),
(176, 'Panquecas Acepipe', 'Panquecas', 'Panquecas de Chocolate, Misto de Frutas, Nougat de Amêndoa, Chocolate, Caramelo, 2 Bolas de  Gelado e Chantilly', '9.50'),
(177, 'Panqueca Tower', 'Panquecas', 'Torre de Panquecas, 1 Bola de Gelado, Nougat de Amêndoa, Topping de Chocolate/ Morango ou Nutella e Chantilly', '9.50'),
(197, 'Acepipe Mix (2 Pax)', 'Acepipe Special', '4 Mini Crepes, 4 Mini Waffles, 4 Mini Panquecas, Nutella, Nougat de Amêndoa e Chantilly', '12.90'),
(198, 'Acepipe Special Summer (2 Pax)', 'Acepipe Special', '4 Mini Crepes, 4 Mini Waffles, 4 Mini Panquecas, Nutella, Misto de Frutas e Chantilly', '14.90'),
(199, 'Acepipe Choco Mix (2 Pax)', 'Acepipe Special', '4 Mini Crepes, 4 Mini Waffles, 4 Mini Panquecas, Nutella, Misto de Chocolates, Topping de Chocolate e Chantilly', '16.90'),
(200, 'Bubble Rainbow', 'Bubble Waffles', 'Bubble Waffle, 1 Bola de Gelado, Topping Colorido, Topping de Morango, Nougat Amêndoa', '7.20'),
(201, 'Bubble Kinder Bueno', 'Bubble Waffles', 'Bubble Waffle, 1 Bola de Gelado, Kinder Bueno, Topping de Chocolate e Chantilly', '7.50'),
(202, 'Bubble Oreo ', 'Bubble Waffles', 'Bubble Waffle, 1 Bola de Gelado, Bolachas Oreo, Topping de Chocolate e Chantilly', '7.50'),
(203, 'Bubble de Frutas e Gelado', 'Bubble Waffles', 'Bubble Waffle, 1 Bola de Gelado, Misto de Fruta, Topping de Chocolate, Topping de Morango e Nougat de Amêndoa', '8.60'),
(204, 'Bubble Acepipe', 'Bubble Waffles', 'Bubble Waffle, 1 Bola de Gelado, Misto de Frutas, Nutella, Nougat de Amêndoa, Topping de Chocolate, de Caramelo e Chatilly', '9.50'),
(205, 'Contrua a Sua Bubble Waffle', 'Bubble Waffles', 'Bubble Waffle, 2 Bolas de Gelado à Escolha, 1 Chocolate à Escolha, 1 Fruta à Escolha, 1 Topping, 1 Cobertura à Escolha e Chatilly', '9.50'),
(206, 'Waffle Açucar e Canela', 'Waffles', 'Waffle, Açucar em Pó e Canela', '3.90'),
(207, 'Waffle Nutella ou Topping', 'Waffles', 'Waffle Nutella ou Topping à Escolha e Chantilly', '4.90'),
(208, 'Waffle Nutella e Morangos', 'Waffles', 'Waffle, Nutella, Morangos e Chantilly', '5.90'),
(209, 'Waffle Mel e Nozes', 'Waffles', 'Waffle, Mel, Nozes e Chantilly', '5.50'),
(210, 'Waffle Banana e Chocolate', 'Waffles', 'Waffle, Banana e Topping de Chocolate e Chantilly', '5.90'),
(211, 'Waffle Oreo', 'Waffles', 'Waffle, Bolacha de Oreo, Topping chocolate e Chantilly', '6.20'),
(212, 'Waffle Kinder Bueno', 'Waffles', 'Waffle, Kinder Bueno, Topping de Chocolate e Chantilly', '6.20'),
(213, 'Waffle Acepipe', 'Waffles', 'Waffle, 1 Bola de Gelado, Misto de Frutas, Nougat de Amêndoa, Topping de Chocolate, de Caramelo e Chantilly', '9.50'),
(214, 'Waffle Tower', 'Waffles', '2 Waffle, 1 Bola de Gelado, Nougat de Amêndoa, Topping de Chocolate ou Morango e Chantilly', '9.50'),
(215, 'Batido Baunilha', 'Batidos', '1 Bola de Gelado de Baunilha, Leite e Chantilly', '4.90'),
(216, 'Batido Chocolate', 'Batidos', '1 Bola de Gelado Chocolate, Topping de Chocolate, Leite e Chantilly', '5.50'),
(217, 'Batido Morango e banana', 'Batidos', '1 Bola de Gelado de Baunilha, Morangos, Banana, Leite e Chantilly', '5.50'),
(218, 'Batido Oreo', 'Batidos', '1 Bola de Gelado de Baunilha, Bolachas Oreo, Topping de Chocolate, Leite e Chantilly', '5.50'),
(219, 'Batido Nutella', 'Batidos', '1 Bola de Gelado de Baunilha, Nutella, Topping de Chocolate, Leite e Chantilly', '5.50'),
(220, 'Batido Kinder bueno', 'Batidos', '1 Bola de Gelado de Chocolate, Kinder Bueno, Topping de Chocolate, Leite e Chantilly', '5.50'),
(221, 'Batido Acepipe', 'Batidos', '1 Bola de Gelado de Chocolate, Topping de Chocolate, Topping de Caramelo, Leite e Chantilly', '5.50'),
(222, 'Café ', 'Cafetaria', '', '1.00'),
(223, 'Descafeinado', 'Cafetaria', '', '1.00'),
(224, 'Carioca de Café ', 'Cafetaria', '', '1.00'),
(225, 'Carioca de Limão', 'Cafetaria', '', '1.00'),
(226, 'Café Pingado', 'Cafetaria', '', '1.00'),
(227, 'Café com Cheiro', 'Cafetaria', '', '2.00'),
(228, 'Abatanado', 'Cafetaria', '', '1.20'),
(229, 'Galão', 'Cafetaria', '', '1.60'),
(230, 'Café Duplo', 'Cafetaria', '', '1.80'),
(231, 'Café com Leite', 'Cafetaria', '', '1.80'),
(232, 'Meia de Leite', 'Cafetaria', '', '1.60'),
(233, 'Capuccino', 'Cafetaria', '', '2.00'),
(236, 'Chá', 'Cafetaria', '', '1.30'),
(237, 'Chá com Leite', 'Cafetaria', '', '1.60'),
(238, 'Leite Ucal', 'Cafetaria', '', '1.80'),
(239, 'Affogato', 'Cafetaria', '', '2.90'),
(240, 'Topping Líquido', 'Extras', '', '0.50'),
(241, 'Coberturas', 'Extras', '', '0.50'),
(243, 'Compota', 'Extras', '', '1.00'),
(244, 'Cone', 'Extras', '', '0.50'),
(245, 'Copo', 'Extras', '', '0.50'),
(246, 'Prato', 'Extras', '', '0.50'),
(247, 'Pão', 'Extras', '', '1.50'),
(248, 'Sangria de Vinho Tinto', 'Vinhos', '', '12.90'),
(249, 'Sangria de Vinho Branco', 'Vinhos', '', '12.90'),
(250, 'Loios (Tinto)', 'Vinhos', '', '12.90'),
(251, 'Loios (Branco)', 'Vinhos', '', '12.90'),
(252, 'Meia Encosta (Tinto)', 'Vinhos', '', '10.90'),
(253, 'Meia Encosta (Branco)', 'Vinhos', '', '10.90'),
(254, 'Fruta', 'Extras', '', 'PVP'),
(255, 'Utensílios Take Away', 'Extras', '', 'PVP'),
(256, 'Brandy', 'Bebidas Espirituosas', '', '4.50'),
(257, 'Cointreau', 'Bebidas Espirituosas', '', '4.50'),
(258, 'Amarguinha', 'Bebidas Espirituosas', '', '2.50'),
(259, 'Vinhas da Murça (Tinto)', 'Vinhos', '', '10.90'),
(260, 'Vinhas da Murça (Branco)', 'Vinhos', '', '10.90'),
(261, 'Vinhas da Murça (Rosé)', 'Vinhos', '', '10.90'),
(262, 'Fita Azul (Espumante Bruto) ', 'Vinhos', '', '18.50'),
(263, 'Chantilly', 'Extras', '', '0.50'),
(264, 'Construa a Sua Waffle', 'Waffles', 'Waffle, 2 Bolas de Gelado à Escolha, 1 Chocolate à Escolha,1 Fruta à Escolha,1 Topping, 1 Cobertura à escolha e Chantilly', '9.50'),
(265, 'Construa as Suas Panquecas', 'Panquecas', 'Panquecas, 2 Bolas de Gelado à Escolha, 1 Chocolate à Escolha,1 Fruta à Escolha,1 Topping, 1 Cobertura à escolha e Chantilly', '9.50'),
(266, 'Construa o Seu Crepe', 'Crepes', 'Crepe, 2 Bolas de Gelado à Escolha, 1 Chocolate à Escolha,1 Fruta à Escolha,1 Topping, 1 Cobertura à escolha e Chantilly', '9.50'),
(267, 'Salada de Frango', 'Saladas', 'Alface, Tomate, Cebola, Pepino e Frango', '6.80'),
(268, 'Salada de Atum', 'Saladas', 'Atum, Alface, Tomate, Cebola, e Pepino', '6.80'),
(269, 'Waffle Frutas e Gelado', 'Waffles', 'Waffle, Misto de Frutas, 1 Bola de Gelado de Baunilha, 1 Bola de Gelado de Morango e Chantilly', '8.60'),
(270, 'Peça uma lista dos cocktails', 'Cocktails', '', '7.50'),
(271, 'Chouriço Assado', 'Tapas', '', '8.90'),
(272, 'Tropical Tango', 'Smoothies', 'Ananás, Kiwi, Manga, Melão', '4.50'),
(273, 'Morning Glory', 'Smoothies', 'Espinafre, Ananás, Banana, Manga', '4.50'),
(274, 'Ice Coffee', 'Smoothies', '', '4.50'),
(275, 'Mad Berries', 'Smoothies', 'Amora, Morango e Framboesa', '4.50'),
(276, 'Bacon Roll', 'Bacon Rolls', '', '4.50'),
(277, 'Bacon e Ovo', 'Bacon Rolls', '', '5.00'),
(278, 'Bacon Queijo e Ovo', 'Bacon Rolls', '', '5.50'),
(279, 'Carrot Passion', 'Smoothies', 'Cenoura, Ananás, Papaia e Maracujá', '4.50'),
(280, 'Chocolate Quente com Marshmallows', 'Cafetaria', '', '5.50');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `Produto`
--
ALTER TABLE `Produto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ID` (`id`),
  ADD UNIQUE KEY `produto_nome` (`nome`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `Produto`
--
ALTER TABLE `Produto`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=281;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

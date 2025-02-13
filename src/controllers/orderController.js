INSERT INTO product (name, price, image, stock, description, discount, category_id, subcategory_id) VALUES  
-- Ofertas (con descuento aplicado)
('Florero de Tulipanes', 50.00, '/uploads/products/FLORERO_TULI.png', 10, 'Hermoso florero con tulipanes frescos.', 10, 1, NULL),  
('Orquídea en Maceta', 80.00, '/uploads/products/ORQUI.png', 8, 'Orquídea natural en elegante maceta.', 15, 1, NULL),  
('Ramo de Tulipanes Frescos', 100.00, '/uploads/products/TULI_RAMO.png', 12, 'Ramo con tulipanes de temporada.', 20, 1, NULL),  
('Ramo de Flores Vicio', 40.00, '/uploads/products/VICIO.png', 15, 'Ramo de flores variadas en tonos vibrantes.', 5, 1, NULL),  
('Centro de Mesa Floral', 120.00, '/uploads/products/centro_de_mesa.png', 5, 'Centro de mesa elegante para eventos.', 10, 1, NULL),  
('Ramo de Flores Coquet', 70.00, '/uploads/products/coquet.png', 10, 'Ramo delicado con flores color pastel.', 8, 1, NULL),  
('Corona de Flores Coronita', 90.00, '/uploads/products/coronita.png', 7, 'Corona fúnebre de flores blancas.', 12, 1, NULL),  
('Arreglo Floral Difunción', 110.00, '/uploads/products/difuncion.png', 6, 'Arreglo floral especial para condolencias.', 15, 1, NULL),  
('Ramo Feliz Cumpleaños', 85.00, '/uploads/products/feliz_cumpleanos.png', 9, 'Ramo colorido ideal para cumpleaños.', 10, 1, 2),  
('Arreglo Funerario', 130.00, '/uploads/products/funebtr.png', 4, 'Arreglo floral sobrio y elegante.', 18, 1, 6),  

-- Productos sin descuento (en otras categorías)
('Ramo de Girasoles y Rosas', 60.00, '/uploads/products/gira_rosa.png', 10, 'Combinación perfecta de girasoles y rosas.', NULL, 4, NULL),  
('Ramo de Graduación', 75.00, '/uploads/products/graduacion.png', 8, 'Ramo elegante para celebrar graduaciones.', NULL, 2, 5),  
('Ramo con Ferrero Rocher', 95.00, '/uploads/products/m_ferrero_rocher.png', 7, 'Ramo con rosas y chocolates Ferrero.', NULL, 2, 1),  
('Ramo de Girasoles', 100.00, '/uploads/products/m_girasoles.png', 10, 'Ramo vibrante con girasoles frescos.', NULL, 4, NULL),  
('Ramo de Flores Lisboa', 110.00, '/uploads/products/m_lisboa.png', 6, 'Ramo de flores exóticas inspirado en Lisboa.', NULL, 4, NULL),  
('Ramo de Muchas Rosas', 150.00, '/uploads/products/m_muchas_rosas.png', 5, 'Impresionante ramo con muchas rosas.', NULL, 4, NULL),  
('Ramo de Flores Princesas', 95.00, '/uploads/products/princesas.png', 9, 'Ramo delicado y elegante.', NULL, 4, NULL),  
('Pequeño Ramito de Flores', 50.00, '/uploads/products/ramito.png', 12, 'Pequeño y lindo ramito de flores variadas.', NULL, 4, NULL),  
('Ramo de Flores Azules', 90.00, '/uploads/products/ramo_azul.png', 8, 'Ramo de flores en tonos azules.', NULL, 4, NULL),  
('Ramo de Rosas Rojas', 95.00, '/uploads/products/ramo_rojo.png', 7, 'Clásico ramo de rosas rojas.', NULL, 4, NULL),  

-- Productos adicionales
('Caja de Rosas y Chocolates', 110.00, '/uploads/products/caja_rosas_chocolates.png', 8, 'Elegante caja con rosas frescas y chocolates premium.', NULL, 2, 1),  
('Ramo de Primavera', 90.00, '/uploads/products/ramo_primavera.png', 10, 'Un hermoso ramo con flores de primavera en tonos cálidos.', NULL, 4, NULL).  

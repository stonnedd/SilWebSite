app.controller("servicesController", function ($scope, $sce) {
    
    $scope.activeTab = 0;
    
    $scope.receive = function () {
        $scope.subTitle = $sce.trustAsHtml("Recibimos");
        $scope.textToShow = $sce.trustAsHtml("Aseguramos la oportuna recepción de los insumos para la salud y dispositivos médicos, con procesos estandarizados y certificados por normas internacionales, lo que nos permite garantizar registros correctos y completos, brindando siempre"+
            "una excelente atención y trato empático a nuestros proveedores.");
        $scope.img = "servicesImg1.jpg";
        $scope.activeTab = 0;
    }
    
    $scope.store = function () {
        $scope.subTitle = $sce.trustAsHtml("Almacenamos");
        $scope.textToShow = $sce.trustAsHtml("Nuestras instalaciones cuentan con las características necesarias para mantener la calidad e inocuidad de los insumos, lo que nos permite contar con las licencias sanitarias para el manejo y almacenamiento de insumos para la salud tales como: <br/><br/>"+
            "<ul>" +
                "<li>Estupefacientes Grupo 1</li>" +
                "<li>Psicotrópicos Grupo 2 y Grupo 3</li>" +
                "<li>Biológicos (vacunas, sueros de origen animal,  antitoxinas de origen animal)</li>" +
                "<li>Hemoderivados</li>" +
            "</ul>"+
            "Adoptamos las mejores prácticas de almacenamiento para mantener disponibilidad inmediata de los insumos y una alta certidumbre en los registros inventarios");
        $scope.img = "servicesImg2.jpg";
        $scope.activeTab = 1;
    }
    
    $scope.distribute = function () {
        $scope.subTitle = $sce.trustAsHtml("Distribuimos");
        $scope.textToShow = $sce.trustAsHtml("Nuestra Red de Distribución llega a 850 puntos de entrega, con unidades de transporte que tienen la capacidad de carga refrigerada, congelada y seca.<br/><br/>"+
            "Todas nuestras unidades cuentan con GPS rastreado en tiempo real en un centro de monitoreo propio.Nuestra flotilla está conformada por 135 vehículos 100 % Diesel.<br/><br/>"+
            "Además, contamos con rastreo de temperatura para mantenimiento de la cadena de frío en dos modalidades: Turbo - tag para garantizar temperatura y GPS con monitoreo activo en línea.");
        $scope.img = "servicesImg3.jpg";
        $scope.activeTab = 2;
    }

});
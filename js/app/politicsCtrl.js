app.controller("politicsController", function ($scope, $sce) {
    
    $scope.activeTab = 0;
    
    $scope.quality = function () {
        $scope.subTitle = $sce.trustAsHtml("Calidad");
        $scope.textToShow = $sce.trustAsHtml("Aseguramos la total satisfacción de nuestros clientes a través de un Sistema de Gestión Integral implementado que garantiza la Calidad de los insumos para la salud en todas las fases de nuestro proceso, desde el recibo, almacenamiento, distribución hasta su entrega a nivel nacional.<br/><br/>"+
            "Estamos certificados bajo las normas ISO9001:2008 para la satisfacción del cliente e ISO13485:2003 para los dispositivos médicos.<br/>" +
            "<div align= 'middle'>"+
                "<img  src='img/iso9001Img.jpg' alt='image' width='200'  />" +   
                "<img  src='img/iso13485Img.jpg' alt='image' width='200'  />" +   
            "</div>");
        $scope.img = "politicsImg1.jpg";
        $scope.activeTab = 0;
    }
    
    $scope.environment = function () {
        $scope.subTitle = $sce.trustAsHtml("Medio Ambiente");
        $scope.textToShow = $sce.trustAsHtml("Somos una empresa comprometida con el medio ambiente y fomentamos cada día en nuestros colaboradores la prevención de la contaminación ambiental a través de acciones que generan un cambio de conciencia para salvaguardar la integridad de nuestro planeta y el futuro de todos los que lo cohabitamos.<br/><br/>"+
            "Estamos certificados bajo la Norma Ambiental ISO 14001:2004.<br/><br/>" +
            "<div align= 'middle'>" +
                "<img  src='img/iso14001Img.jpg' alt='image' width='200' style='align:middle'/>" +   
            "</div>");
        $scope.img = "politicsImg2.jpg";
        $scope.activeTab = 1;
    }
    
    $scope.genderEquity = function () {
        $scope.subTitle = $sce.trustAsHtml("Equidad de Género");
        $scope.textToShow = $sce.trustAsHtml("Contamos con un reconocimiento por el Instituto Nacional de las Mujeres como empresa que promueve la Equidad de Género e Igualdad de Oportunidades avalado por el Modelo de Equidad de Género, MEG:2003");
        $scope.img = "politicsImg3.jpg";
        $scope.activeTab = 2;
    }

});
app.controller("inovationController", function ($scope, $sce) {
    
    $scope.activeTab = 0;
    
    $scope.infraestructure = function () {
        $scope.subTitle = $sce.trustAsHtml("Infraestructura");
        $scope.textToShow = $sce.trustAsHtml("Nuestras instalaciones cumplen con todos los requisitos para la Recepción, Almacenaje y Distribución de insumos para la salud, con altos niveles de Seguridad y Confiabilidad en la operación.<br/><br/>" +
            "<i style='font-weight:bolder'>ALMACÉN GENERAL</i>" +
            "<ul>" +
                "<li>103 andenes de carga y descarga con rampas niveladoras.</li>" +
                "<li>20 montacargas sin emisiones tóxicas.</li>" +
                "<li>12 patines eléctricos.</li>" +
                "<li>Planta de generación de 1.2 MVA Diesel.</li>" +
                "<li>Registro permanente de humedad y temperatura.</li>" +
                "<li>Piso epóxico.</li>" +
                "<li>Racks OTF (Off the floor).</li>" +
                "<li>24,367 posiciones de racks.</li>" +
            "</ul>" +
            "<i style='font-weight:bolder'>CADENA DE FRÍO</i>" +
            "<ul>" +
                "<li>Superficie de cámara fría de 13,500 m3. </li>" +
                "<li>Superficie de antecámara de 5,000 m3.</li>" +
                "<li>2,250 posiciones de rack refrigerado.</li>" +
                "<li>Control computarizado de temperatura.</li>" +
            "</ul>" +
            "");
        $scope.img = "inovationImg1.jpg";
        $scope.activeTab = 0;
    }
    
    $scope.technology = function () {
        $scope.subTitle = $sce.trustAsHtml("Innovaciones");
        $scope.textToShow = $sce.trustAsHtml("Contamos con una Central de Distribución con tecnología de punta e infraestructura de Clase Mundial.<br/><br/>"+
            "Vivimos nuestro valor corporativo de Mejora Continua al implementar innovaciones tecnológicas más eficientes en nuestros procesos, con la finalidad de ser más productivos y cumplir satisfactoriamente con nuestro cliente.");
        $scope.img = "inovationImg2.jpg";
        $scope.activeTab = 1;
    }
});
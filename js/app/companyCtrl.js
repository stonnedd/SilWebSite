app.controller("companyController", function($scope, $timeout, $sce) {

    $scope.activeTab = 0;

    $scope.whoWeAre = function () {
        
        $scope.subTitle = $sce.trustAsHtml("¿Quiénes somos?");
        $scope.textToShow = $sce.trustAsHtml("Iniciamos operaciones en abril de 2009 con la recepción de producto farmacéutico, y fue el 6 de mayo del mismo año cuando oficialmente distribuimos insumos para la salud en toda la república.<br/><br/>"  + 
                            "Desde entonces, los colaboradores de SILODISA estamos comprometidos con la salud de millones de mexicanos, hemos llevado 450 millones de medicamentos a todo el país, cubriendo 850 puntos de entrega.<br/><br/>"+
                            "En SILODISA, estamos orgullosos de ser una empresa 100% mexicana. ");
        $scope.img = "companyImg1.jpg";
        $scope.activeTab = 0;
       

    }

    $scope.mision = function () {
        $scope.subTitle = $sce.trustAsHtml("Misión, Visión y Valores");
        $scope.textToShow = $sce.trustAsHtml("<i style='font-weight:bolder'>NUESTRA MISIÓN:</i> <br/>"+
        "Servir al Sector Salud en la recepción, almacenamiento y distribución de insumos para el cuidado de la salud de manera eficiente, contribuyendo a la atención médica oportuna y calidad de vida de los pacientes.<br/><br/>"+
        "<i style='font-weight:bolder'>NUESTRA VISIÓN:</i><br/>"+
        "Ser reconocidos como el operador logístico de vanguardia por su alta confiabilidad en la administración de la cadena de abastecimiento de insumos para la salud en México.<br/><br/>"+
        "<i style='font-weight:bolder'>NUESTROS VALORES INSTITUCIONALES:</i><br/>"+
        "Nuestra cultura está estructurada por 7 valores:<br/>" +
         "<img  src='img/companyImg3.jpg' alt='image' width='600' />"+   
        "");
        $scope.img = "companyImg2.jpg";
        $scope.activeTab = 1; 
    }

    $scope.ourPeople = function () {
        $scope.subTitle = $sce.trustAsHtml("¡NUESTRA GENTE, ORGULLO SILODISA!");
        $scope.textToShow = $sce.trustAsHtml("Estamos satisfechos de contar con un gran equipo de trabajo. Buscamos siempre el desarrollo del capital humano porque creemos que las personas son la pieza clave en nuestra organización.<br/><br/>"+
        "Reconocidos por Manpower como una empresa incluyente con compromiso social al contratar a personas con discapacidad y adultos mayores.<br/><br/>"+
        "Generamos condiciones laborales adecuadas para que nuestra gente desarrolle sus actividades con entusiasmo, éxito y constancia, de esta forma somos más productivos para cumplir con nuestro compromiso: distribuir esperanza de vida.");
        $scope.img = "companyImg4.jpg";
        $scope.activeTab = 2; 
    }

});
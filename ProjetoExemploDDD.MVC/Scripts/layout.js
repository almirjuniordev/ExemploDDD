
/**
 * Lista de todas as capas disponíveis
 *
 * @type Array
 */
var my_skins = [
    "skin-blue",
    "skin-black",
    "skin-red",
    "skin-yellow",
    "skin-purple",
    "skin-green",
    "skin-blue-light",
    "skin-black-light",
    "skin-red-light",
    "skin-yellow-light",
    "skin-purple-light",
    "skin-green-light"
];


/**

 * Obter uma configuração pré-determinada
 *
 * @param name da string Nome da configuração
 * @returns String O valor da configuração | nulo
 */
function get(name) {
    if (typeof (Storage) !== "undefined") {
        return localStorage.getItem(name);
    } else {
        window.alert('Use um navegador moderno para visualizar corretamente este modelo!');
    }
}


/**

 * Armazene uma nova configuração no navegador
 *
 * @param name da string Nome da configuração
 * @param String val Valor da configuração
 * @returns void
 */
function store(name, val) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(name, val);
    } else {
        window.alert('Use um navegador moderno para visualizar corretamente este documento!');
    }
}

/**

     * Substitui a pele velha pela nova pele
     * @param String cls a nova classe de pele
     * @returns Boolean false para evitar a ação padrão do link
     */
function change_skin(cls) {
    $.each(my_skins, function (i) {
        $("body").removeClass(my_skins[i]);
    });

    // Caso não haja no storage nenhum skin por padrão ele define o layout azul
    if (cls === null) {
        cls = "skin-blue"
    }
    $("body").addClass(cls);
    store('skin', cls);
    return false;
}

$('body').ready(change_skin(get('skin')))
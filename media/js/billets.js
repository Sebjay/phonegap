// ETAPE 1 : DECLARATION DES VARIABLES

// dab est un objet vide qui va contenir notre code:
var dab = {};
dab.somme = 0; // somme à distribuer
dab.tableauBillets = [500,200,100,50,20,10,5];
dab.tableauImages = [
	'<img src="media/img/euros-500.jpg">',
	'<img src="media/img/euros-200.jpg">',
	'<img src="media/img/euros-100.jpg">',
	'<img src="media/img/euros-50.jpg">',
	'<img src="media/img/euros-20.jpg">',
	'<img src="media/img/euros-10.jpg">',
	'<img src="media/img/euros-5.jpg">'
]
// ETAPE 2 : DECLARATION DES FONCTIONS

dab.demarrage = function ()
{
	alert("page prête");
	// installer les événements "onclick"
	jQuery("#boutonRetrait").on("click", dab.retirerBillets);
}

dab.retirerBillets = function ()
{
	alert("tu as cliqué");
	// récupérer la somme demandée du champs <input> :
	dab.somme = jQuery("input#retrait").val();

	alert("MONTANT DU RETRAIT: " + dab.somme);

// calcul du nombre de billets à distribuer
// arrondi a entier inferieur
	// form.nbBillets = Math.floor(form.somme / 100);
	compteur = 0;
	jQuery("#resultat").html("");
	while(compteur < dab.tableauBillets.length)
	{
		billetEnCours = dab.tableauBillets[compteur];
		imageEnCours = dab.tableauImages[compteur];

		// alert("combien de billets de " + billetEnCours);
		// math.floor arrondit à l'inférieur
		nbBillets = Math.floor(dab.somme / billetEnCours);
		// alert(nbBillets);
		compteurBillet = 0;
		while (compteurBillet < nbBillets)
		{
			// afficher le billet
			jQuery("#resultat").append(imageEnCours);
			// ajouter un au compteur
			compteurBillet = compteurBillet + 1;
		}
		// enlever la somme distribuée
		dab.somme = dab.somme % billetEnCours;

	// ajouter 1 au compteur :
		compteur = compteur + 1;
	}

	

}
// ETAPE 3 : ACTIVATION DU CODE

// demande à jquery d'activer la fonction dab.demarrage seulement quand le page est prête:
jQuery(dab.demarrage);
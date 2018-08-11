$(document).ready(function() {
  genChips();
  initBJ();
});

$(document).on("pagecontainershow", function() {

    switch ($('.ui-page-active').attr('id')) {

        case "pageHome":

            break;

        case "pageTable":

            break;

          case "pageMenu":
              if (envDev()) $("#btnDevMode").text("Disable Dev Mode");
              else $("#btnDevMode").text("Enable Dev Mode");
              break;
    }
});

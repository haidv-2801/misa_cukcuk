
/**
 * Class toolbar
 * DVHAI 06/06/2021
 */
 class ToolBar {
    constructor(toolbarId) {
        let me = this;

        me.Toolbar = $(`${toolbarId}`);

        //khởi tạo các sự kiện trên toolbar
        me.initEvents();

        //readonly cho dropdown-box
        me.Toolbar.find("input.dropdown-box").prop('readonly', true);
    }

    /**
     * Hàm chứa các sự kiện trên toolbar
     * DVHAI 06/06/2021
     */
    initEvents() {
        let me = this;

        //Hàm ẩn thu gọn, mở rộng toolbar 
        me.toggleToolbar();


        //Các event trong dropdown: keyup,click
        me.eventDropdown();
    }

    /**
     * Hàm ẩn thu gọn, mở rộng toolbar 
     * khi click toggle icon
     * DVHAI 06/06/2021
     */
    toggleToolbar() {
        let me = this;
    }

    /**
     * Hàm sự kiện drodown trong toolbar
     * DVHAI 06/06/2021
     */
    eventDropdown() {
        let me = this;

        me.dropdownHeadClick();

        me.dropdownRowClick();

        // me.dropdownKeyup();
    }
    
    /**
     * hiển thị dropdown
     * click vào item có type=dropdown
     * hiển thị dropdown ngay bên dưới
     * DVHAI 06/06/2021
     */
     dropdownHeadClick() {
        let me = this;

        me.Toolbar.find("[type=dropdown]").on("click", function () {
            me.toggleDropdown($(this));
        });
    }

    /**
     * hiển thị dropdown
     * click vào item có type=dropdown
     * hiển thị dropdown ngay bên dưới
     * DVHAI 06/06/2021
     */
    toggleDropdown(me) {
        me.next().slideToggle("fast");
        me.toggleClass("rotate");
    }


     /**
     * Hiển thị giá trị sau khi click vào row
     * DVHAI 06/06/2021
     */
    dropdownRowClick() {
        let me = this;

        me.Toolbar.find("[row]").on("click", function () {
            let value = $(this).find("span").text();
            $(this).parent().parent().find("[type=dropdown]").val(value);
            $(this).parent().parent().find("[type=dropdown]").toggleClass("rotate");
            $(this).parent().slideToggle();
        });
    }



    dropdownKeyup() {
        let me =  this;

        me.Toolbar.on("change", "input", function(){
            
        });
    }
}


var toolbar = new ToolBar(".main__filter");
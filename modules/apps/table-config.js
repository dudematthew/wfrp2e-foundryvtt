

export default class WFRPTableConfig extends RollTableConfig {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {width: 725})
    }

    get template() {
        return "systems/wfrp2e/templates/apps/table-config.html"
    }
}
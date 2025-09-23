import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CHART_URL_SRC } from "./utils/embedCode";
import { WgetForm } from "./utils/wget";

export const ChartPreview = ({ config }: { config: WgetForm }) => {
    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Live Preview</CardTitle>
                </CardHeader>
                <CardContent className="h-[720px]">
                    <EmbeddedChart chartConfig={config} />
                </CardContent>
            </Card>
        </div>
    );
};

const PRICE_CHART_ID = "price-chart-widget-container";

declare global {
    interface Window {
        createMyWidget: (id: string, config: WgetForm) => void;
    }
}

const EmbeddedChart = ({ chartConfig }: { chartConfig: WgetForm }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const loadWidget = () => {
            if (typeof window.createMyWidget === "function") {
                window.createMyWidget(PRICE_CHART_ID, chartConfig);
            }
        };

        if (!document.getElementById("moralis-chart-widget")) {
            const script = document.createElement("script");
            script.id = "moralis-chart-widget";
            script.src = CHART_URL_SRC;
            script.type = "text/javascript";
            script.async = true;
            script.onload = loadWidget;

            document.body.appendChild(script);
        } else {
            loadWidget();
        }
    }, [chartConfig]);

    return <div id={PRICE_CHART_ID} ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

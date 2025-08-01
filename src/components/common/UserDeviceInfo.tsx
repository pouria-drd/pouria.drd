"use client";

import { Loader2 } from "lucide-react";
import { getDeviceInfo } from "@/actions";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function UserDeviceInfo() {
	const [isLoading, setIsLoading] = useState(true);
	const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);

	useEffect(() => {
		const fetchDeviceInfo = async () => {
			try {
				const info = await getDeviceInfo();

				setDeviceInfo(info);
			} catch (error) {
				console.error("Error fetching device info");
				setDeviceInfo({
					ip_address: "Error",
					user_agent: "Error",
					device_type: "Error",
					os: "Error",
					os_version: "Error",
					browser: "Error",
					browser_version: "Error",
					device_brand: "Error",
					device_model: "Error",
				});
			} finally {
				setIsLoading(false);
			}
		};

		fetchDeviceInfo();
	}, []);

	return (
		<div className="flex items-center justify-center p-4">
			<Card className="w-80">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">
						Device Information
					</CardTitle>
				</CardHeader>
				<CardContent>
					{isLoading ? (
						<div className="flex justify-center items-center h-32">
							<Loader2 className="h-8 w-8 animate-spin text-primary" />
						</div>
					) : (
						<div className="space-y-4">
							{deviceInfo &&
								Object.entries(deviceInfo).map(
									([key, value]) => (
										<div
											key={key}
											className="flex justify-between text-sm">
											<span className="font-medium text-muted-foreground capitalize">
												{key.replace("_", " ")}
											</span>
											<span className="text-primary truncate max-w-[60%]">
												{value}
											</span>
										</div>
									),
								)}
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}

export default UserDeviceInfo;

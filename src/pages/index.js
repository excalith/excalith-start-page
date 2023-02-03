import React, { useEffect, useState } from "react"
import Config from "@/startpage.config"
import Meta from "@/components/Meta"
import Window from "@/components/Window"

export default function Home() {
	return (
		<>
			<Meta username={Config.username} />
			<Window />
		</>
	)
}
